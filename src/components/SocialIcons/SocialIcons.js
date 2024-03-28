import {
	FaFacebook,
	FaTwitter,
	FaYoutube,
	FaWeixin,
	FaWeibo,
	FaQq,
	FaWhatsapp,
} from "react-icons/fa";

function SocialMediaIcons() {
	return (
		<div className="flex justify-end space-x-4 pr-8">
			<a
				href="https://facebook.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-blue-500"
			>
				<FaFacebook className="text-xl" />
			</a>
			<a
				href="https://twitter.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-blue-300"
			>
				<FaTwitter className="text-xl" />
			</a>
			<a
				href="https://youtube.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-red-500"
			>
				<FaYoutube className="text-xl" />
			</a>
			<a
				href="https://whatsapp.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-green-600"
			>
				<FaWhatsapp className="text-xl" />
			</a>
			<a
				href="https://weibo.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-red-400"
			>
				<FaWeibo className="text-xl" />
			</a>
			<a
				href="https://qq.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-black"
			>
				<FaQq className="text-xl" />
			</a>
			<a
				href="https://weixin.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-green-400"
			>
				<FaWeixin className="text-xl" />
			</a>
		</div>
	);
}

export default SocialMediaIcons;
