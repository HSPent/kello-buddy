import { useEffect, useState, useCallback } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

const SESSION_KEY = "exit_intent_shown";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem(SESSION_KEY)) {
        sessionStorage.setItem(SESSION_KEY, "true");
        setOpen(true);
      }
    },
    [],
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const handleRegister = () => {
    setOpen(false);
    const ctaSection = document.getElementById("cta-form");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="max-w-md rounded-2xl border-none bg-gradient-to-b from-card to-secondary p-8">
        <AlertDialogHeader className="space-y-3">
          <AlertDialogTitle className="text-xl font-bold leading-tight text-foreground">
            지금 가입 안 하면<br />다른 샵에서 예약합니다.
            <span className="ml-1 text-muted-foreground font-medium text-base">(1분 등록)</span>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm leading-relaxed text-muted-foreground">
            지금 가입하면 파트너 세팅 체크리스트 + 운영 템플릿을 즉시 받을 수 있어요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4 flex-col gap-2 sm:flex-col">
          <AlertDialogAction
            onClick={handleRegister}
            className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            1분 등록하고 시작하기
          </AlertDialogAction>
          <AlertDialogCancel className="w-full border-none bg-transparent text-sm text-muted-foreground hover:bg-transparent hover:text-foreground">
            괜찮아요, 나중에 할게요
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExitIntentPopup;
