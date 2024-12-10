export default function CatCard({ data }){
    return (
        <div className="flex flex-col gap-2 p-3 border border-black">
            <img src={data.url} alt="cat" className="{w-[$data.width]}"></img>
        </div>
    )
}