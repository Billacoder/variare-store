import { ReactNode } from "react";

type StepHeaderProps = {
  step?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
};

export default function StepHeader({
  step,
  title,
  description,
  icon,
}: StepHeaderProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          {step && (
            <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-400">
              {step}
            </p>
          )}

          <h2 className="mt-2 text-3xl font-semibold">
            {title}
          </h2>
        </div>

        {icon}
      </div>

      {description && (
        <p className="mt-5 max-w-2xl text-neutral-500">
          {description}
        </p>
      )}
    </div>
  );
}