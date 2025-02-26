export function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-16 h-16 border-4 border-bg-blue-ocean border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-16 h-16 border-4 border-transparent border-t-white rounded-full animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
}
