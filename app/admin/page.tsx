import {
  Package,
  ShoppingCart,
  IndianRupee,
  Star,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <>
      <h1 className="text-5xl font-light">
        Dashboard
      </h1>

      <p className="mt-3 text-neutral-500">
        Welcome back.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <Card
          title="Products"
          value="10"
          icon={<Package size={24} />}
        />

        <Card
          title="Orders"
          value="5"
          icon={<ShoppingCart size={24} />}
        />

        <Card
          title="Revenue"
          value="₹18,500"
          icon={<IndianRupee size={24} />}
        />

        <Card
          title="Best Sellers"
          value="4"
          icon={<Star size={24} />}
        />

      </div>
    </>
  );
}

function Card({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border bg-white p-8">
      <div className="flex items-center justify-between">
        {icon}

        <span className="text-4xl font-light">
          {value}
        </span>
      </div>

      <p className="mt-8 text-neutral-500">
        {title}
      </p>
    </div>
  );
}