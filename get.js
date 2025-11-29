function get(src, path) {
    path.split(".").forEach(e => src = src ? src[e] : undefined);
    return src;
}