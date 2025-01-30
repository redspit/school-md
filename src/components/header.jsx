import HeaderAccount from "@/components/header_account"
import Search from "@/components/search"

const TopHeader = () => {
	return (
		<div className="w-full h-[50px] flex md:justify-between justify-end">
		<div className="hidden md:flex">
			<Search />
			</div>
			<HeaderAccount />
		</div>
	)
}

export default TopHeader
