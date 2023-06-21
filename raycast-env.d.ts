/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `sqs` command */
  export type Sqs = ExtensionPreferences & {}
  /** Preferences accessible in the `lambda` command */
  export type Lambda = ExtensionPreferences & {}
  /** Preferences accessible in the `s3` command */
  export type S3 = ExtensionPreferences & {}
  /** Preferences accessible in the `cloudwatch` command */
  export type Cloudwatch = ExtensionPreferences & {}
  /** Preferences accessible in the `secrets` command */
  export type Secrets = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `sqs` command */
  export type Sqs = {}
  /** Arguments passed to the `lambda` command */
  export type Lambda = {}
  /** Arguments passed to the `s3` command */
  export type S3 = {}
  /** Arguments passed to the `cloudwatch` command */
  export type Cloudwatch = {}
  /** Arguments passed to the `secrets` command */
  export type Secrets = {}
}
