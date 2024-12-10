interface IBreadcrumbProps {
  backgroundImage: string;
  title: string;
  breadcrumbText: string;
}

const DynamicBreadcrumbSection = ({
  backgroundImage,
  title,
  breadcrumbText,
}: IBreadcrumbProps) => {
  return (
    <div
      style={{backgroundImage: `url(${backgroundImage})`}}
      className="bg-cover bg-center relative lg:h-[404px] w-full flex items-end justify-center py-6 lg:pb-16 text-white text-center"
    >
      <div className="max-w-lg">
        {/* title */}
        <p className="mb-5">{title}</p>
        {/* breadcrumb text */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold w-8/12 md:w-full mx-auto">
          {breadcrumbText}
        </h2>
      </div>
    </div>
  );
};

export default DynamicBreadcrumbSection;
