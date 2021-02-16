// -----JS CODE-----
var all = script.getSceneObject().getParent();
var s = all.getParent();
var img = s.getChild(0).getChild(0).getTransform();
var glr = img.getLocalRotation();
var rz = img.getLocalRotation().z * -1;

// new quat(Number w, Number x, Number y, Number z)
var nn = new quat(glr.w, glr.x, glr.y, rz);

img.setLocalRotation(nn)

// var pp = img.getLocalPosition();

// // var rp = new vec3(pp.x * -1, pp.y, pp.z)
// // img.setLocalPosition(rp)


// print(img.getLocalRotation().getTypeName())
// print(nn)

