import AboutMe from "@/client/components/AboutMe";
import "../styles/page.scss";
import ProfileSection from "@/client/components/ProfileCard";

export default function Home() {
	return (
		<div className="page home">
			<ProfileSection />
			<AboutMe />
		</div>
	);
}
