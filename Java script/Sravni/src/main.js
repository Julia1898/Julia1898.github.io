import {rdFunctionality} from './functions';
import {rdShowItems} from './view';

var rdRenderCustomise = rdFunctionality.RenderCustomise;
var rdFillLine = rdFunctionality.fillLine;

rdShowItems.createRender(rdRenderCustomise, rdFillLine);
