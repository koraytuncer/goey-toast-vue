import { GoeyToaster, goeyToast } from 'goey-toast'
import './App.css'

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function failAfter(ms: number) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('Failed')), ms))
}

function App() {
  return (
    <>
      <GoeyToaster position="top-left" />

      <div className="demo">
        <h1>goey-toast</h1>
        <p className="subtitle">Morphing toast notifications</p>

        <div className="section">
          <h2>Simple Toasts</h2>
          <div className="buttons">
            <button onClick={() => goeyToast('Notification received')}>
              Default
            </button>
            <button onClick={() => goeyToast.success('Changes Saved')}>
              Success
            </button>
            <button onClick={() => goeyToast.error('Something went wrong')}>
              Error
            </button>
            <button onClick={() => goeyToast.warning('Storage is almost full')}>
              Warning
            </button>
            <button onClick={() => goeyToast.info('New update available')}>
              Info
            </button>
          </div>
        </div>

        <div className="section">
          <h2>With Description</h2>
          <div className="buttons">
            <button
              onClick={() =>
                goeyToast.warning('Your session is about to expire', {
                  description:
                    "You've been inactive for 25 minutes. Please save your work or your session will end automatically.",
                })
              }
            >
              Warning + Description
            </button>
            <button
              onClick={() =>
                goeyToast.error('Connection lost', {
                  description:
                    'Unable to reach the server. Check your internet connection and try again.',
                })
              }
            >
              Error + Description
            </button>
          </div>
        </div>

        <div className="section">
          <h2>With Action Button</h2>
          <div className="buttons">
            <button
              onClick={() =>
                goeyToast.error('Payment failed', {
                  description:
                    'Your card ending in 4242 was declined. Please update your payment method to continue.',
                  action: {
                    label: 'Update Payment',
                    onClick: () => goeyToast.success('Redirecting...'),
                  },
                })
              }
            >
              Error + Action
            </button>
            <button
              onClick={() =>
                goeyToast.info('Share link ready', {
                  description: 'Your share link has been generated and is ready to copy.',
                  action: {
                    label: 'Copy to Clipboard',
                    onClick: () => navigator.clipboard.writeText('https://example.com/share/abc123'),
                    successLabel: 'Copied!',
                  },
                })
              }
            >
              Action → Success Pill
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Custom Component Body</h2>
          <div className="buttons">
            <button
              onClick={() =>
                goeyToast.success('Deployment complete', {
                  description: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 300 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                        <span style={{ color: '#888' }}>Environment</span>
                        <span style={{ fontWeight: 600 }}>Production</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                        <span style={{ color: '#888' }}>Branch</span>
                        <span style={{ fontWeight: 600 }}>main @ 3f8a2c1</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                        <span style={{ color: '#888' }}>Duration</span>
                        <span style={{ fontWeight: 600 }}>2m 14s</span>
                      </div>
                      <div style={{ height: 1, background: '#e5e5e5' }} />
                      <div style={{ fontSize: 11, color: '#888' }}>
                        https://my-app.vercel.app
                      </div>
                    </div>
                  ),
                })
              }
            >
              ReactNode Description
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Promise (Morph Animation)</h2>
          <div className="buttons">
            <button
              onClick={() =>
                goeyToast.promise(sleep(2000), {
                  loading: 'Saving...',
                  success: 'Changes Saved',
                  error: 'Something went wrong',
                })
              }
            >
              Promise → Success (pill)
            </button>
            <button
              onClick={() =>
                goeyToast.promise(failAfter(2000), {
                  loading: 'Saving...',
                  success: 'Changes Saved',
                  error: 'Something went wrong',
                })
              }
            >
              Promise → Error (pill)
            </button>
            <button
              onClick={() =>
                goeyToast.promise(failAfter(2000), {
                  loading: 'Uploading file...',
                  success: 'Upload complete',
                  error: 'Upload failed',
                  description: {
                    error:
                      "You've used 95% of your available storage. Please upgrade and plan to continue.",
                  },
                  action: {
                    error: {
                      label: 'Action Button',
                      onClick: () => goeyToast.info('Retrying...'),
                    },
                  },
                })
              }
            >
              Promise → Error (morph to expanded)
            </button>
            <button
              onClick={() =>
                goeyToast.promise(sleep(2000), {
                  loading: 'Processing...',
                  success: 'All done!',
                  error: 'Failed',
                  description: {
                    success: 'Your data has been processed and saved successfully.',
                  },
                })
              }
            >
              Promise → Success (morph to expanded)
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
