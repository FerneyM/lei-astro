export default function NewsItem(data) {
    console.log(data)
    return (
        <div class="field__item">
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
                                        class="h-auto w-full object-cover"
                                        alt={data.data.title}
                                    />
                                </div>
                            </div>
                        </article>
                    </div>

                    <div class="text-lg">
                        {data.data.title}
                    </div>

                    <div class="text-sm mt-4">
                        <p>
                            {data.data.description}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}