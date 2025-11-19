export function getStepIndexFromPathname(
  pathname: string,
  steps: { route: string; fields: string[] }[],
  baseRoute: string
) {
  const cleanedPathname = pathname.replace(baseRoute, '').replace(/\/+$/, '');

  const activeStep = steps.findIndex((step) => step.route === cleanedPathname);

  return {
    currentStepIndex: cleanedPathname === '' ? 0 : activeStep,
    activeStep,
  };
}
