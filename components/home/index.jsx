import ProjectProminent from './ProjectProminent'
import Prominent from './Prominent'
import Partner from './Partner'
import LatestNews from './LatestNews'
import Footer from '../general/Footer'

export default function IndexHome() {
    return (
        <>
            <ProjectProminent />
            <Prominent />
            <Partner></Partner>
            <LatestNews></LatestNews>
        </>
    )
}
