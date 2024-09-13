export default function InsightItem(data) {
    console.log(data)
    return (
        <div class="field__item hover:border-blue-400 hover:border-1 hover:shadow-lg hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.4)]">
            <div>
                <a href="services.html">
                    <div>
                        <article>
                            <div>
                                <div class="field__item">
                                    <img
                                        loading="lazy"
                                        src={data.data.image}
                                        width="328"
                                        height="184"
                                        alt={data.data.subtitle}
                                        class="w-full h-48 object-cover"
                                    />
                                </div>
                            </div>
                        </article>
                    </div>

                    <div class="bottom-2 left-2 text-sky-400 text-sm font-semibold px-3 py-3 rounded">
                        {data.data.title}
                    </div>
                    <h2 class="text-xl font-bold px-3 py-1">
                        <span>
                            {data.data.subtitle}
                        </span>
                    </h2>
                    <div class="text-sm mt-2 ml-2 py-1">
                        <p>
                            {data.data.description}
                        </p>
                    </div>
                </a>
            </div>
            <a class="underline underline-offset-4 m-2 text-orange-500 font-bold py-4">Read more</a>
        </div>
    )
}