import { Dimensions,Platform } from "react-native";

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = Platform.isPad ? 568 : 375;

const guidelineBaseHeight = Platform.isPad ? 824 : 812;

const scale = size => (width/guidelineBaseWidth) * size;

const VerticalScale = size => (height/guidelineBaseHeight) * scale;

export{
    scale,
    VerticalScale,
    guidelineBaseHeight,
    guidelineBaseWidth
}