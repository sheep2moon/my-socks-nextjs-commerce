import { createClient, createPortableTextComponent, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2022-07-06", // or today's date for latest
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
};

if (!config.projectId) {
    throw Error("The Project ID is not set. Check your environment variables.");
}
export const urlFor = source => createImageUrlBuilder(config).image(source);

export const getImageUrl = source => {
    let ref = source.asset._ref;
    ref = ref.slice(6);
    const idx = ref.lastIndexOf("-");
    ref = ref.substring(0, idx) + "." + ref.substring(idx + 1);
    const url = `https://cdn.sanity.io/images/${config.projectId}/${config.dataset}/${ref}`;
    console.log(url);
    return url;
};

export const imageBuilder = source => createImageUrlBuilder(config).image(source);

export const client = createClient(config);
export default client;

// export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// export const PortableText = createPortableTextComponent({
//     ...config,
//     serializers: {
//         types: {
//             code: props => (
//                 <pre data-language={props.node.language}>
//                     <code>{props.node.code}</code>
//                 </pre>
//             )
//         }
//     }
// });

// export const previewClient = createClient({
//     ...config,
//     useCdn: false
// });

// export const getClient = usePreview => (usePreview ? previewClient : client);
