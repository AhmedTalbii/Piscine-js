function getAcceleration(obj) {
    if (obj ?? Object.keys().length === 0) return "impossible";
    let res = obj.f / obj.m;
    if (!isFinite(res)) return res;
    res = obj.Δv / obj.Δt;
    if (!isFinite(res)) return res;
    res = 2*obj.d / obj.t**2;
    if (!isFinite(res)) return res;
    return "impossible";
}
