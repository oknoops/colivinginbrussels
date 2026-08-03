import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ColivingInBrussels — Find your coliving home in Brussels';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Branded default social/OG image, generated at the edge. Gives every share and
 * many AI answer cards a warm, on-brand thumbnail instead of a broken preview.
 */
export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '80px',
                    background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 45%, #FFE4E6 100%)',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <div
                        style={{
                            width: 96,
                            height: 96,
                            borderRadius: 26,
                            background: 'linear-gradient(135deg, #FB923C 0%, #F97316 55%, #F43F5E 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 54,
                        }}
                    >
                        🏡
                    </div>
                    <div style={{ display: 'flex', fontSize: 40, fontWeight: 800, color: '#2D3436' }}>
                        <span>Coliving</span>
                        <span style={{ color: '#F97316' }}>in</span>
                        <span>Brussels</span>
                    </div>
                </div>
                <div
                    style={{
                        marginTop: 48,
                        fontSize: 76,
                        fontWeight: 800,
                        color: '#2D3436',
                        lineHeight: 1.05,
                        maxWidth: 900,
                    }}
                >
                    Find your home in Brussels.
                </div>
                <div style={{ marginTop: 28, fontSize: 34, color: '#636E72', maxWidth: 940 }}>
                    Compare every coliving space · Honest local guides · No booking commissions
                </div>
                <div style={{ marginTop: 44, display: 'flex', gap: 16, fontSize: 26, color: '#9A3412' }}>
                    <span style={{ background: '#FFEDD5', padding: '10px 22px', borderRadius: 999 }}>12 operators compared</span>
                    <span style={{ background: '#FFE4E6', padding: '10px 22px', borderRadius: 999 }}>8 neighborhoods</span>
                    <span style={{ background: '#FEF3C7', padding: '10px 22px', borderRadius: 999 }}>Daily guides</span>
                </div>
            </div>
        ),
        { ...size }
    );
}
