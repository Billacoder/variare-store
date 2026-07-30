export default function VideoBackground({
	src,
	overlay = true,
	overlayClassName = "bg-black/30",
	className = "",
}) {
	return (
		<>
			<video
				autoPlay
				muted
				loop
				playsInline
				preload="auto"
				disablePictureInPicture
				className={`absolute inset-0 h-full w-full object-cover ${className}`}
			>
				<source src={src} type="video/mp4" />
			</video>

			{overlay && (
				<div className={`absolute inset-0 ${overlayClassName}`} />
			)}
		</>
	);
}