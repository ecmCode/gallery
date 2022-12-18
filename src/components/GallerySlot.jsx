
const GallerySlot = ({title, source}) => {

    const urllist = [...Array(10).keys()]
    return(
        <div className={style.container}>
            <div className={style.title}>
                {title || 'Gallery'}
            </div>
            <div className={style.photos}>
                {source.map((img,index) =>
                    <div className="relative">
                        <img 
                        key={index} 
                        src={`../src/asset/${img.url}`} 
                        className={style.photo}
                        />
                        <div className={style.caption}>{img.caption}</div>
                    </div>
                )}
            </div>
        </div>
  )
}

const style = {
    container:'my-10',
    title:'text-4xl my-10 text-center',
    photos:'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-4 gap-4',
    photo:'shadow-md w-96 h-96 md:w-72 md:h-72 object-cover',
    caption:'absolute p-4 opacity-0 hover:opacity-100 text-neutral-50 select-none transition duration-100 w-full bottom-2 text-right right-0 bg-neutral-50/20 backdrop-blur-sm text-base font-bold '
}
export default GallerySlot