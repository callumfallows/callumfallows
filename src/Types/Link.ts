export class Link {
    enabled: boolean;
    target: string;
    active: boolean;
    href: string;
    rel: string;
    title: string;
    constructor(enabled: boolean, target: "_blank", href: string, title: string, active: boolean, rel: "nofollow") {
        this.enabled = enabled;
        this.target = target;
        this.href = href;
        this.title = title;
        this.active = active;
        this.rel = rel;
    }
}