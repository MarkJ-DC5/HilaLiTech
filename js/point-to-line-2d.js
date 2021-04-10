// Author: Matt DesLauriers
// Github Profile: https://mattdesl.com/
// File source: https://gist.github.com/mattdesl/47412d930dcd8cd765c871a65532ffac

// Taken From:
// https://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment

function sqr(x) {
	return x * x;
}

function dist2(v, w) {
	return sqr(v[0] - w[0]) + sqr(v[1] - w[1]);
}

// p - point
// v - start point of segment
// w - end point of segment
function distToSegmentSquared(p, v, w) {
	var l2 = dist2(v, w);
	if (l2 === 0) return dist2(p, v);
	var t =
		((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
	t = Math.max(0, Math.min(1, t));
	return dist2(p, [v[0] + t * (w[0] - v[0]), v[1] + t * (w[1] - v[1])]);
}

// p - point
// v - start point of segment
// w - end point of segment

//Modified
function distFromRiver(p) {
	const c = [p.lat, p.lng];
	const v = [14.676640768847646, 121.10758052458716];
	const w = [14.620006901008896, 121.08251796405618];
	return Math.sqrt(distToSegmentSquared(c, v, w));
}
