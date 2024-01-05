import PhotoCard from "@/components/PhotoCard"
import Modal from "@/components/Modal"
import photos from "@/lib/photos"

const PhotoModal = ({params : {id}}) => {

    const photo = photos.find(photo => photo.id === id)

  return (
    <Modal>
        <PhotoCard photo={photo}/>
    </Modal>
  )
}

export default PhotoModal