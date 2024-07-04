import './style.css'
import { setupComponent } from './components'
import { headerDiv } from './components/header'
import { typeScriptTypes } from './components/typescript_types';
import { typeScriptAnnotations } from './components/type_annotations';
import { typeInference } from './components/type_inference';
import { typeScriptTypesMore } from './components/typescript_types_more';
import { typeAliasAndStringLiteral } from './components/type_alias_and _string_literal';
import { typeScriptFunctions } from './components/typeScript_function';
import { typeScriptClassesInterfaces } from './components/typeScript_classes_interfaces';
import { typeScriptAdvancedTypes } from './components/typeScript_advanced_types';
import { typeScriptGenerics } from './components/typeScript_Generics';


setupComponent(headerDiv);
setupComponent(typeScriptTypes);
setupComponent(typeScriptAnnotations);
setupComponent(typeInference);
setupComponent(typeScriptTypesMore);
setupComponent(typeAliasAndStringLiteral);
setupComponent(typeScriptFunctions);
setupComponent(typeScriptClassesInterfaces);
setupComponent(typeScriptAdvancedTypes);
setupComponent(typeScriptGenerics);