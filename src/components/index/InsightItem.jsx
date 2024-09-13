export default function InsightItem(data) {
    console.log(data)
    return (
        <div class="views-row">
                        <a href="youth-leadership-climate-action-shaping-sustainable-future.html" rel="bookmark">
                            <article role="article" class="node node--type-resource node--view-mode-card card-body">
                                <div class="node__content">
                                    <div class="img-wrapper">
                                        <div class="img">
                                            <div
                                                class="field field--name-field-media field--type-entity-reference field--label-hidden field__item"
                                            >
                                                <article
                                                    class="media media--type-image media--view-mode-card"
                                                >
                                                    <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                        <div class="field__label visually-hidden">
                                                            Image
                                                        </div>
                                                        <div class="field__item">
                                                            <img
                                                                loading="lazy"
                                                                src={data.data.image}
                                                                width="621"
                                                                height="348"
                                                                alt={data.data.subtitle}
                                                                class="image-style-card"
                                                            />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info">
                                        <div>
                                            <div
                                                class="field field--name-field-category field--type-entity-reference field--label-hidden field__items"
                                            >
                                                <div class="field__item">
                                                    {data.data.title}
                                                </div>
                                            </div>

                                            <h2>
                                                <span class="field field--name-title field--type-string field--label-hidden"> 
                                                    {data.data.subtitle}
                                                </span>
                                            </h2>

                                            <div
                                                class="field field--name-body field--type-text-with-summary field--label-hidden field__item"
                                            >
                                                <p>
                                                    {data.data.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="read-more">Read more</div>
                                    </div>
                                </div>
                            </article>
                        </a>
                    </div>
    )
}