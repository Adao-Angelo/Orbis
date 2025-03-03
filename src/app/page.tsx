import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  let { data: categories, error } = await supabase
    .from("categories")
    .select("*");
  if (error) console.error("error:", error);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
