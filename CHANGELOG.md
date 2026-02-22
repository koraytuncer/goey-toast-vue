# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-02

### Added

- Full Vue 3 port of [goey-toast](https://github.com/anl331/goey-toast)
- Organic blob morph animation (pill → blob → pill)
- Five toast types: default, success, error, warning, info
- Description body with string or Vue Component support
- Action button with optional success label morph-back
- Promise toasts with loading → success/error transitions
- Configurable display duration and bounce intensity
- 6 positions: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
- Right-side positions auto-mirror the blob horizontally
- Center positions use symmetric morph animation
- Hover pause: hovering an expanded toast pauses the dismiss timer
- Hover re-expand: hovering a collapsed pill re-expands the toast
- Pre-dismiss collapse animation (blob shrinks to pill before exit)
- Custom fill color, border color, and border width
- CSS class overrides via `classNames` prop
- Built on [vue-sonner](https://github.com/xiaoluoboding/vue-sonner) and [Motion](https://motion.dev)
