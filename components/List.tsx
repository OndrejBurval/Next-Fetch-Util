import useFetch from "@/api/utils/useFetch";
import type Post from "@/types/Post";

const List = async () => {
	const { data, error, status } = await useFetch<Post[]>("/comments");

	return (
		<ul>
			<li>
				<h1> List </h1>
			</li>
			<li>data - {JSON.stringify(data)}</li>
			<li>error - {JSON.stringify(error?.message)}</li>
			<li>status - {JSON.stringify(status)}</li>
		</ul>
	);
};

export default List;
