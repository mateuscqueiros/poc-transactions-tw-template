export type StepControlsProps = {
  active: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
};

export function StepControls({
  active,
  total,
  onNext,
  onPrev,
}: StepControlsProps) {
  const isFirstStep = active === 0;
  const isLastStep = active === total - 1;

  return (
    <div className="mt-8">
      <div className="divider"></div>

      <div className="flex justify-between mt-4">
        <div>
          {!isFirstStep && (
            <button
              type="button"
              onClick={onPrev}
              disabled={isFirstStep}
              className="btn btn-outline"
            >
              Voltar
            </button>
          )}
        </div>

        <div>
          {!isLastStep ? (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onNext();
              }}
              className="btn btn-primary"
            >
              Continuar
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              Finalizar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
