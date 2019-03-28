export class ImageType {
    src: string;
    width: number;
    height:number;
    srcSet: string;
    altText: string;
    ariaLabel: string;
    constructor(src: string, height: number, width: number, srcSet: string, altText: string, ariaLabel: string) {
        this.src = src;
        this.width = width;
        this.height = height;
        this.srcSet = srcSet;
        this.altText = altText;
        this.ariaLabel = ariaLabel;
    }
}