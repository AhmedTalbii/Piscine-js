function getAcceleration(obj) {
    if (obj && Object.keys().length === 0) return "impossible";
    let res = obj.f / obj.m;
    res = obj.Δv / obj.Δt;
    res = 2*obj.d / obj.t**2;
    return isFinite(res) ? "impossible" : res;
}