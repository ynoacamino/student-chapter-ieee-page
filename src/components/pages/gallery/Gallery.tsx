/* eslint-disable react/jsx-pascal-case */
function Box_1_1() {
  return (
    <div className="w-full aspect-[1/1] bg-web-gray-100 rounded-md hover:scale-105 transition-transform hover:cursor-pointer hover:shadow-lg" />
  );
}

function Box_9_16() {
  return (
    <div className="w-full aspect-[9/16] bg-web-gray-100 rounded-md hover:scale-105 transition-transform hover:cursor-pointer hover:shadow-lg" />
  );
}

function Box_16_9() {
  return (
    <div className="w-full aspect-[16/9] bg-web-gray-100 rounded-md hover:scale-105 transition-transform hover:cursor-pointer hover:shadow-lg" />
  );
}

export default function Gallery() {
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-3 gap-6 mb-40">
      <div className="flex flex-col gap-6">
        <Box_9_16 />
        <Box_1_1 />
        <Box_1_1 />
        <Box_16_9 />
      </div>
      <div className="flex flex-col gap-6">
        <Box_16_9 />
        <Box_9_16 />
        <Box_1_1 />
        <Box_1_1 />
      </div>
      <div className="flex flex-col gap-6">
        <Box_1_1 />
        <Box_16_9 />
        <Box_1_1 />
        <Box_9_16 />
      </div>
    </section>
  );
}
