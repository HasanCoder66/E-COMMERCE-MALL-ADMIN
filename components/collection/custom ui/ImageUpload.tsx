import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {

  // console.log(value.url)
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
    console.log(result);
  };
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4 bg-black">
        {value.map((url,i) => (
          <Image
            src={url}
            alt="collection"
            key={i}
            width={100}
            height={200}
            className="object-cover rounded-lg "
          />
        ))}
      </div>
      <CldUploadWidget uploadPreset="ecommerceadmin" onUploadAdded={onUpload}>
        {({ open }) => {
          return (
            <Button className="bg-grey-1 text-white" onClick={() => open()}>
              <Plus className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
