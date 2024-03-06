import useFetch from "@/api/utils/useFetch";

const List = async () => {
	const data = await useFetch("/posts");

	return <div>List - {JSON.stringify(data)}</div>;
};

export default List;
