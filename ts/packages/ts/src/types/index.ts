import CfguContentsJTDSchema from './generated/CfguContents.jtd.json';
import StoreContentsJTDSchema from './generated/StoreContents.jtd.json';

export { CfguContentsJTDSchema, StoreContentsJTDSchema };

export { CfguType, Cfgu as ICfgu } from './generated/Cfgu';
export { ConfigSchemaType, ConfigSchema, CfguContents } from './generated/CfguContents';

export { StoreQuery, StoreConfiguration, Store as IStore } from './generated/Store';
export { Config, StoreContents } from './generated/StoreContents';

export type EvaluatedConfigs = { [key: string]: string };
export type EvaluatedConfigsArray = { key: string; value: string }[];