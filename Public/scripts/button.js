// -----JS CODE-----
//@input Asset.Texture tex
var all = script.getSceneObject().getParent();
var s = all.getParent();
var img = s.getChild(0).getChild(0).getComponent("Component.Image");
img.mainPass.baseTex = script.tex;