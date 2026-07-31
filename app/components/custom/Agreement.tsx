"use client";

type AgreementProps = {
  agreed: boolean;
  setAgreed: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Agreement({
  agreed,
  setAgreed,
}: AgreementProps) {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Step 7
        </p>

        <h2 className="mt-2 font-serif text-3xl">
          Before You Submit
        </h2>

        <p className="mt-4 max-w-2xl text-neutral-600">
          Please read the information below before submitting your custom
          order request.
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
        <ul className="space-y-4 text-sm leading-7 text-neutral-700">
          <li>
            • This submission is a request for a custom order and does not
            guarantee acceptance.
          </li>

          <li>
            • Every crochet piece is handmade, so slight variations from
            reference images are normal.
          </li>

          <li>
            • Final pricing will depend on the design, size, materials, and
            complexity of your request.
          </li>

          <li>
            • Production begins only after the design, price, and payment
            details have been confirmed.
          </li>

          <li>
            • We may contact you if additional measurements or information
            are needed.
          </li>
        </ul>

        <label className="mt-8 flex cursor-pointer items-start gap-4">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 h-5 w-5 accent-black"
          />

          <span className="text-sm leading-6 text-neutral-700">
            I have read and understand the information above, and I agree
            that this is a custom order request rather than an immediate
            purchase.
          </span>
        </label>
      </div>
    </section>
  );
}