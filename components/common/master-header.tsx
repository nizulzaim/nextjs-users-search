type Props = {
  title: string;
  description?: string;
};

export default function MasterHeader({ title, description }: Props) {
  return (
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-3xl font-semibold leading-6 text-gray-900">
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        )}
      </div>
    </div>
  );
}
