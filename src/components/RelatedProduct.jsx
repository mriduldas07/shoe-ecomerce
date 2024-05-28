import { useEffect, useState } from "react";
import RelatedProductCard from "./RelatedProductCard";

// eslint-disable-next-line react/prop-types
export default function RelatedProduct({ id }) {
  const [data, setData] = useState([]);

  const newData = data.filter((d) => d.id !== id);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:8000/shoes`);
      const data = await res.json();
      if (data) {
        setData(data);
      }
    }

    fetchData();
  }, [id]);
  return (
    <div className="flex flex-wrap gap-3 items-center px-8 py-8">
      {newData.map((p) => (
        <RelatedProductCard key={p.id} data={p} />
      ))}
    </div>
  );
}
