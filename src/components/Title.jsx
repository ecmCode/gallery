const Title = ({wallpaper,title}) => {
    return(
        <div
        style={{
            'backgroundImage': `url(${wallpaper})`,
            'backgroundPosition':'center',
            'backgroundPositionY':'75%',
            'backgroundSize':'150%',
        }}
        className={style.background}>
            <div 
            style={{
                'textShadow': '2px 2px 5px rgb(23,23,23,0.75)'
            }}
            className={style.title}>
                {title}
            </div>
        </div>
    )
}

const style = {
    background:'w-full h-48 md:h-96 flex justify-center items-center overflow-hidden object-cover',
    title:'text-4xl md:text-6xl drop-shadow-md uppercase font-bold text-neutral-50 tracking-widest select-none',
}
export default Title 