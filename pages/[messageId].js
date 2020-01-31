import { useRouter } from 'next/router';
import Layout from '../shared/commonLayout';

const messages = {
	"0": "bla0",
	"1": "bla1",
	"2": "bla2",
	"3": "bla3",
	"4": "bla4",
	"5": "bla5",
	"6": "bla6",
	"7": "bla7",
	"8": "bla8",
	"9": "bla9",
};

export default function Message() {
	const router = useRouter();

	return (
		<Layout>
			<audio controls>
				<source src="https://archive.org/details/wcd_yuigonzakura_enn-mo-takenawa/01+Fujoki.mp3" type="audio/mp3"></source>
			</audio>
		</Layout>
	);
}