function NotificationItem({ avatar, title, description, time }) {
    return (
        <div className="flex items-center justify-between border-b border-gray-200 ">
            <div className="flex items-center cursor-pointer">
                <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                <div className="ml-4 py-2">
                    <div className="text-sm font-semibold">{title}</div>
                    <div className="text-sm text-gray-500">{description}</div>
                    <div className="text-sm text-gray-400">{time}</div>
                </div>
            </div>
 
        </div>
    );
}

export default NotificationItem