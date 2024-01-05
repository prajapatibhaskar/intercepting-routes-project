import PhotoCard from "@/components/PhotoCard";
import photos from "@/lib/photos";
import Link from "next/link";

const PhotoPage = ({ params: { id } }) => {
  const photo = photos.find((photo) => photo.id === id);

  return (
    <section className="py-24">
      <div className="container">
        <div>
          <Link
            href={"/photos"}
            className="font-semibold italic text-sky-600 underline"
          >
            Back to Photos
          </Link>
        </div>

        <div className="mt-10 w-1/3">
          <PhotoCard photo={photo} />
        </div>
      </div>
    </section>
  );
};

export default PhotoPage;
