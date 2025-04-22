import MaxWidthWrapper from "./max-width-wrapper";
import { SkeletonCard } from "./skeleton-card";

export default function ImagesPageLoader() {
  return (
    <div className="w-full h-screen">
        <MaxWidthWrapper>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mt-5 gap-x-3 gap-y-6">
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
            </div>
        </MaxWidthWrapper>
    </div>
  )
}
