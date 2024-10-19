import React from "react";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";

const GalleryPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">3D Card Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* You can render multiple 3D cards here */}
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
      </div>
    </div>
  );
};

export default GalleryPage;
