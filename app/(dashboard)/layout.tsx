import Sidebar from "@/components/layout/Sidebar";
import MobileSidebar from "@/components/layout/Sidebar/MobileSidebar";
import { cn } from "@/lib/utils";

const DashboardLayout = async (props: { children: React.ReactNode }) => {
  const isProPlan = false
  const userLimitCount = 5;
  return (
    <div>
      <header>
      </header>
      <main className="lg:bg-gray-950 lg:overflow-hidden lg:pl-80 [&:has([is-navbar-minimal])]:lg:pl-20 lg:pr-7 lg:py-7">
        <Sidebar
          isProPlan={isProPlan}
          userLimitCount={userLimitCount}
          className={cn(
            "fixed left-0 z-20 w-80 [&:has([is-navbar-minimal])]:w-fit hidden",
            "lg:block"
          )}
        />
        <MobileSidebar isProPlan={isProPlan} userLimitCount={userLimitCount} />
        <div
          className={cn(
            "bg-background h-[calc(100vh-56px)]",
            "lg:rounded-3xl lg:p-7"
          )}
        >
          {props.children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
