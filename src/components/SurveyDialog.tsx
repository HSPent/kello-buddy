import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import KelloText from "./KelloText";
import { supabase } from "@/lib/supabase";

export interface SurveyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  applicationId?: string | null;
  basicInfo?: {
    businessName: string;
    region: string;
    category: string;
    contact: string;
    email: string;
  };
  onComplete?: () => void;
}

const q1Options = [
  { label: "거의 없음 (월 1~2명 이하)", value: "거의 없음 (월 1~2명 이하)" },
  { label: "가끔 있음 (월 3~10명)", value: "가끔 있음 (월 3~10명)" },
  { label: "꾸준히 있음 (월 10~30명)", value: "꾸준히 있음 (월 10~30명)" },
  { label: "매우 많음 (월 30명 이상)", value: "매우 많음 (월 30명 이상)" },
] as const;

const q2Options = [
  { label: "언어 소통 문제", value: "언어 소통 문제" },
  { label: "예약 관리의 번거로움", value: "예약 관리의 번거로움" },
  { label: "가격 설명의 어려움", value: "가격 설명의 어려움" },
  { label: "노쇼(예약 취소) 문제", value: "노쇼(예약 취소) 문제" },
  { label: "결제 방식 문제", value: "결제 방식 문제" },
  { label: "특별히 없음", value: "특별히 없음" },
] as const;

const q3Options = [
  { label: "워크인(지나가다 방문)", value: "워크인(지나가다 방문)" },
  { label: "SNS 검색", value: "SNS 검색" },
  { label: "기존 고객 추천", value: "기존 고객 추천" },
  { label: "여행 플랫폼(OTA 등)", value: "여행 플랫폼(OTA 등)" },
  { label: "거의 유입되지 않음", value: "거의 유입되지 않음" },
] as const;

const q4Options = [
  { label: "다국어 예약 시스템", value: "다국어 예약 시스템" },
  { label: "정찰제 가격 안내", value: "정찰제 가격 안내" },
  { label: "해외 결제 시스템", value: "해외 결제 시스템" },
  { label: "마케팅·홍보 지원", value: "마케팅·홍보 지원" },
  { label: "외국인 고객 관리 지원", value: "외국인 고객 관리 지원" },
] as const;

const q5Options = [
  { label: "합리적인 수수료", value: "합리적인 수수료" },
  { label: "우수한 고객 품질 (객단가 등)", value: "우수한 고객 품질 (객단가 등)" },
  { label: "예약 및 관리 편의성", value: "예약 및 관리 편의성" },
  { label: "외국인 응대 지원 (번역 등)", value: "외국인 응대 지원 (번역 등)" },
  { label: "실제 매출 증대 가능성", value: "실제 매출 증대 가능성" },
] as const;

type Q1Value = (typeof q1Options)[number]["value"];
type Q2Value = (typeof q2Options)[number]["value"];
type Q3Value = (typeof q3Options)[number]["value"];
type Q4Value = (typeof q4Options)[number]["value"];
type Q5Value = (typeof q5Options)[number]["value"];

type AnswersState = {
  q1: Q1Value | "";
  q2: Q2Value[];
  q3: Q3Value | "";
  q4: Q4Value | "";
  q5: Q5Value | "";
  q6: string;
};

const ALLOWED_Q1 = new Set<string>(q1Options.map((o) => o.value));
const ALLOWED_Q2 = new Set<string>(q2Options.map((o) => o.value));
const ALLOWED_Q3 = new Set<string>(q3Options.map((o) => o.value));
const ALLOWED_Q4 = new Set<string>(q4Options.map((o) => o.value));
const ALLOWED_Q5 = new Set<string>(q5Options.map((o) => o.value));

const INITIAL_ANSWERS: AnswersState = {
  q1: "",
  q2: [],
  q3: "",
  q4: "",
  q5: "",
  q6: "",
};

const SurveyDialog = ({
  open,
  onOpenChange,
  applicationId,
  basicInfo,
  onComplete,
}: SurveyDialogProps) => {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [answers, setAnswers] = useState<AnswersState>(INITIAL_ANSWERS);
  const [submitted, setSubmitted] = useState(false);

  const handleQ2Toggle = (value: Q2Value) => {
    setAnswers((prev) => {
      const current = prev.q2;

      // "특별히 없음"은 단독 선택만 허용
      if (value === "특별히 없음") {
        return {
          ...prev,
          q2: current.includes("특별히 없음") ? [] : ["특별히 없음"],
        };
      }

      // 다른 항목을 누르면 "특별히 없음" 제거
      let next = current.filter((v) => v !== "특별히 없음");

      // 이미 선택된 항목이면 해제
      if (next.includes(value)) {
        next = next.filter((v) => v !== value);
        return { ...prev, q2: next };
      }

      // 최대 2개 선택 제한
      if (next.length >= 2) {
        toast.error("최대 2개까지만 선택할 수 있습니다.");
        return prev;
      }

      return {
        ...prev,
        q2: [...next, value],
      };
    });
  };

  const canNext = () => {
    if (step === 0) return !!answers.q1;
    if (step === 1) return answers.q2.length > 0;
    if (step === 2) return !!answers.q3;
    if (step === 3) return !!answers.q4;
    if (step === 4) return !!answers.q5;
    if (step === 5) return true;
    return false;
  };

  const validateBeforeSubmit = () => {
    if (!answers.q1 || !ALLOWED_Q1.has(answers.q1)) return "Q1 응답을 선택해주세요.";
    if (answers.q2.length < 1 || answers.q2.length > 2) return "Q2는 1~2개를 선택해주세요.";
    if (!answers.q2.every(v => ALLOWED_Q2.has(v))) return "Q2 응답이 올바르지 않습니다.";
    if (!answers.q3 || !ALLOWED_Q3.has(answers.q3)) return "Q3 응답을 선택해주세요.";
    if (!answers.q4 || !ALLOWED_Q4.has(answers.q4)) return "Q4 응답을 선택해주세요.";
    if (!answers.q5 || !ALLOWED_Q5.has(answers.q5)) return "Q5 응답을 선택해주세요.";
    return null;
  };

  const submitSurvey = async () => {
    const errorMsg = validateBeforeSubmit();
    if (errorMsg) {
      toast.error(errorMsg);
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. partner_surveys 테이블에 데이터 저장
      const { error } = await supabase
        .from("partner_surveys")
        .insert([{
          application_id: applicationId,
          q1_foreigner_ratio: answers.q1,
          q2_difficulties: answers.q2,
          q3_inflow_path: answers.q3,
          q4_needed_for_expansion: answers.q4,
          q5_selection_criteria: answers.q5,
          q6_bad_case_memo: answers.q6?.trim() || null
        }]);

      if (error) {
        console.error("Survey Insert Error:", error);
        toast.error("설문 저장 중 오류가 발생했습니다.");
        throw error;
      }

      toast.success("설문에 참여해 주셔서 감사합니다!");
      setSubmitted(true);
    } catch (err: any) {
      console.error("Survey submission failed:", err);
      const errorMsg = err?.message || (typeof err === 'string' ? err : "알 수 없는 에러가 발생했습니다.");
      toast.error(`설문 저장 중 오류가 발생했습니다: ${errorMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (isSubmitting) return;

    if (step < 5) {
      setStep((prev) => prev + 1);
      return;
    }

    submitSurvey();
  };

  const handleClose = () => {
    if (isSubmitting) return;

    onOpenChange(false);

    setTimeout(() => {
      setStep(0);
      setSubmitted(false);
      setAnswers(INITIAL_ANSWERS);
      if (submitted && onComplete) onComplete();
    }, 300);
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <div className="flex flex-col items-center py-8 text-center gap-4">
            <CheckCircle className="h-16 w-16 text-primary" />
            <DialogTitle className="text-2xl font-bold">감사합니다!</DialogTitle>
            <DialogDescription className="text-muted-foreground text-lg mt-2">
              소중한 의견을 반영하여 곧 연락드리겠습니다.
            </DialogDescription>
            <button
              onClick={handleClose}
              className="mt-4 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              닫기
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            사장님이 <KelloText />에 바라는 서비스
          </DialogTitle>
          <DialogDescription>
            간단한 설문에 답해주시면 더 나은 서비스를 만드는 데 큰 도움이 됩니다.
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-1 mb-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-muted"
                }`}
            />
          ))}
        </div>

        <div className="py-2 space-y-4 min-h-[200px]">
          {step === 0 && (
            <div className="space-y-3">
              <p className="font-semibold text-sm">
                1. 현재 외국인 고객 비중은 어느 정도입니까?
              </p>
              <RadioGroup
                value={answers.q1}
                onValueChange={(v) =>
                  setAnswers((prev) => ({ ...prev, q1: v as Q1Value }))
                }
              >
                {q1Options.map((opt) => (
                  <div
                    key={opt.value}
                    className="flex items-center space-x-3 p-3 rounded-xl border border-border hover:bg-muted/50 transition-colors"
                  >
                    <RadioGroupItem value={opt.value} id={`q1-${opt.value}`} />
                    <Label
                      htmlFor={`q1-${opt.value}`}
                      className="cursor-pointer flex-1 text-sm"
                    >
                      {opt.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-3">
              <p className="font-semibold text-sm">
                2. 외국인 고객 응대 시 가장 어려운 점은? (최대 2개)
              </p>
              {q2Options.map((opt) => (
                <div
                  key={opt.value}
                  className="flex items-center space-x-3 p-3 rounded-xl border border-border hover:bg-muted/50 transition-colors"
                >
                  <Checkbox
                    id={`q2-${opt.value}`}
                    checked={answers.q2.includes(opt.value)}
                    onCheckedChange={() => handleQ2Toggle(opt.value)}
                  />
                  <Label
                    htmlFor={`q2-${opt.value}`}
                    className="cursor-pointer flex-1 text-sm"
                  >
                    {opt.label}
                  </Label>
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <p className="font-semibold text-sm">
                3. 현재 외국인 고객은 주로 어떻게 유입됩니까?
              </p>
              <RadioGroup
                value={answers.q3}
                onValueChange={(v) =>
                  setAnswers((prev) => ({ ...prev, q3: v as Q3Value }))
                }
              >
                {q3Options.map((opt) => (
                  <div
                    key={opt.value}
                    className="flex items-center space-x-3 p-3 rounded-xl border border-border hover:bg-muted/50 transition-colors"
                  >
                    <RadioGroupItem value={opt.value} id={`q3-${opt.value}`} />
                    <Label
                      htmlFor={`q3-${opt.value}`}
                      className="cursor-pointer flex-1 text-sm"
                    >
                      {opt.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <p className="font-semibold text-sm">
                4. 외국인 고객 확대를 위해 가장 필요한 것은?
              </p>
              <RadioGroup
                value={answers.q4}
                onValueChange={(v) =>
                  setAnswers((prev) => ({ ...prev, q4: v as Q4Value }))
                }
              >
                {q4Options.map((opt) => (
                  <div
                    key={opt.value}
                    className="flex items-center space-x-3 p-3 rounded-xl border border-border hover:bg-muted/50 transition-colors"
                  >
                    <RadioGroupItem value={opt.value} id={`q4-${opt.value}`} />
                    <Label
                      htmlFor={`q4-${opt.value}`}
                      className="cursor-pointer flex-1 text-sm"
                    >
                      {opt.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3">
              <p className="font-semibold text-sm">
                5. 제휴 플랫폼을 선택할 때 가장 중요하게 생각하시는 기준은?
              </p>
              <RadioGroup
                value={answers.q5}
                onValueChange={(v) =>
                  setAnswers((prev) => ({ ...prev, q5: v as Q5Value }))
                }
              >
                {q5Options.map((opt) => (
                  <div
                    key={opt.value}
                    className="flex items-center space-x-3 p-3 rounded-xl border border-border hover:bg-muted/50 transition-colors"
                  >
                    <RadioGroupItem value={opt.value} id={`q5-${opt.value}`} />
                    <Label
                      htmlFor={`q5-${opt.value}`}
                      className="cursor-pointer flex-1 text-sm"
                    >
                      {opt.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-3">
              <p className="font-semibold text-sm">
                6. 외국인 고객 응대 경험 중 가장 기억에 남는 불편 사례는?
              </p>
              <Textarea
                placeholder="자유롭게 작성해주세요 (선택사항)"
                value={answers.q6}
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, q6: e.target.value }))
                }
                className="min-h-[120px] rounded-xl text-sm"
              />
            </div>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          {step > 0 && (
            <button
              onClick={() => setStep((prev) => prev - 1)}
              disabled={isSubmitting}
              className="flex-1 border border-border text-foreground font-semibold py-3 rounded-xl hover:bg-muted/50 transition-colors text-sm disabled:opacity-40"
            >
              이전
            </button>
          )}

          <button
            onClick={handleNext}
            disabled={!canNext() || isSubmitting}
            className="flex-1 bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : step < 5 ? (
              "다음"
            ) : (
              <>
                <Send className="h-4 w-4" />
                제출하기
              </>
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SurveyDialog;