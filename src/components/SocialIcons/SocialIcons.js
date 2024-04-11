import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaWhatsappSquare,
	FaWeixin,
} from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { AiFillWeiboSquare, AiFillQqSquare } from "react-icons/ai";
// import { ReactComponent as WechatIcon } from "../../assets/svg/wechat-tile.svg";

function SocialMediaIcons() {
	return (
		<div className="flex justify-end space-x-4 pr-8">
			<a
				href="https://facebook.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-blue-500 text-gray-600"
			>
				<FaFacebookSquare className="text-2xl" />
			</a>
			<a
				href="https://twitter.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-blue-300 text-gray-600"
			>
				<FaTwitterSquare className="text-2xl" />
			</a>
			<a
				href="https://youtube.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-red-500 text-gray-600"
			>
				<TbBrandYoutubeFilled className="text-2xl" />
			</a>
			<a
				href="https://whatsapp.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-green-600 text-gray-600"
			>
				<FaWhatsappSquare className="text-2xl" />
			</a>
			<a
				href="https://weibo.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-red-400 text-gray-600"
			>
				<AiFillWeiboSquare className="text-2xl" />
			</a>
			<a
				href="https://qq.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-black text-gray-600
"
			>
				<AiFillQqSquare className="text-2xl" />
			</a>
			<a
				href="https://weixin.com"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-green-400  text-gray-600"
			>
				<FaWeixin className="text-2xl" />
			</a>
		</div>
	);
}

export default SocialMediaIcons;
