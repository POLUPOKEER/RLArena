import React, { useState } from 'react';
import {
    Form,
    Input,
    DatePicker,
    Upload,
    Button,
    message,
    Radio,
    Tooltip,
} from 'antd';
import {
    InboxOutlined,
    FileImageOutlined,
    FileZipOutlined,
} from '@ant-design/icons';
import type { UploadProps } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const { Dragger } = Upload;
const { RangePicker } = DatePicker;

export const CreateCompetitionPage = () => {
    const navigate = useNavigate();
    const [contestType, setContestType] = useState<'ml' | 'rl'>('ml');
    const [form] = Form.useForm();
    const token = localStorage.getItem('token');
    const onFinish = async (values: any) => {
        const formData = new FormData();
        try {
            formData.append('title', values.title);
            formData.append('shortInfo', values.shortInfo);
            formData.append('shortDescription', values.shortDescription);
            formData.append('description', values.description.fileList[0].originFileObj);
            formData.append('dataDescription', values.dataDescription.fileList[0].originFileObj);
            formData.append('contest_type', contestType);
            formData.append('submission_file_type', values.submission_file_type);
            formData.append('start_date', values.dates[0].toISOString());
            formData.append('end_date', values.dates[1].toISOString());
            formData.append('image', values.image.fileList[0].originFileObj);
            formData.append('license', values.license);
            formData.append('dataset_public', values.dataset_public.fileList[0].originFileObj);
            formData.append('rewards', values.rewards);

            if (contestType === 'ml') {
                formData.append('metric', values.metric);
                formData.append('target', values.target);
                formData.append('dataset_private', values.dataset_private.fileList[0].originFileObj);
            } else {
                formData.append('metric', '-');
                formData.append('target', '-');
                formData.append('rl_github_repo', values.rl_github_repo);
                formData.append('dataset_private', '-');
            }

            const res = await fetch('http://localhost/api/v1/contests', {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            });

            if (res.ok) {
                form.resetFields();
                navigate('/Main')
                window.location.reload()
                window.scrollTo({ top: 0 })
                message.success('Соревнование успешно создано!');
            } else {
                const errorText = await res.text();
                throw new Error(errorText);
            }
        } catch (error) {
            console.error(error);
            message.error('Ошибка при создании соревнования');
        }
    };

    const uploadProps: UploadProps = {
        beforeUpload: () => false,
        maxCount: 1,
    };

    const isLogin = localStorage.getItem('token');
    return (
        <div className="bg-primary min-h-screen py-12 px-4 md:px-16">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
                    Создание соревнования
                </h1>

                <div className="flex justify-center mb-8">
                    <Radio.Group
                        onChange={(e) => setContestType(e.target.value)}
                        value={contestType}
                        size="large"
                    >
                        <Radio.Button value="ml">ML соревнование</Radio.Button>
                        <Radio.Button value="rl">RL соревнование</Radio.Button>
                    </Radio.Group>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="title"
                        label="Название соревнования"
                        rules={[{ required: true, message: 'Пожалуйста, введите название!' }]}
                    >
                        <Input placeholder={contestType === 'ml' ? 'Titanic' : 'Cartpole'} />
                    </Form.Item>

                    <Form.Item
                        name="shortInfo"
                        label="Краткая информация"
                        rules={[{ required: true, message: 'Пожалуйста, введите краткую информацию!' }]}
                    >
                        <Input placeholder={contestType === 'ml' ? 'Классическое ML соревнование' : 'Классическое RL соревнование'} />
                    </Form.Item>

                    <Form.Item
                        name="shortDescription"
                        label="Краткое описание"
                        rules={[{ required: true, message: 'Пожалуйста, введите краткое описание!' }]}
                    >
                        <Input placeholder={contestType === 'ml' ? 'Соревнование для новичков в ML' : 'Соревнование для новичков в RL'} />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        label="Полное описание (Markdown файл)"
                        rules={[{ required: true, message: 'Пожалуйста, загрузите файл с описанием!' }]}
                    >
                        <Dragger {...uploadProps}>
                            <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                            <p className="ant-upload-hint">Перетащите файл или нажмите для загрузки</p>
                            {/* <p className="ant-upload-hint">description.md</p> */}
                        </Dragger>
                    </Form.Item>

                    <Form.Item
                        name="dataDescription"
                        label="Описание данных (Markdown файл)"
                        rules={[{ required: true, message: 'Пожалуйста, загрузите файл с описанием данных!' }]}
                    >
                        <Dragger {...uploadProps}>
                            <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                            <p className="ant-upload-hint">Перетащите файл или нажмите для загрузки</p>
                            {/* <p className="ant-upload-hint">dataDescription.md</p> */}
                        </Dragger>
                    </Form.Item>

                    <Form.Item
                        name="submission_file_type"
                        label="Тип отправляемого файла"
                        rules={[{ required: true, message: 'Пожалуйста, укажите тип файла!' }]}
                    >
                        <Input placeholder="csv" />
                    </Form.Item>

                    <Form.Item
                        name="dates"
                        label="Период проведения"
                        rules={[{ required: true, message: 'Пожалуйста, выберите период проведения!' }]}
                    >
                        <RangePicker showTime className="w-full" />
                    </Form.Item>

                    <Form.Item
                        name="image"
                        label="Изображение для соревнования"
                        rules={[{ required: true, message: 'Пожалуйста, загрузите изображение!' }]}
                    >
                        <Dragger {...uploadProps}>
                            <p className="ant-upload-drag-icon"><FileImageOutlined /></p>
                            <p className="ant-upload-hint">Перетащите файл или нажмите для загрузки</p>
                        </Dragger>
                    </Form.Item>

                    <Form.Item
                        name="license"
                        label="Лицензия"
                        rules={[{ required: true, message: 'Пожалуйста, укажите лицензию!' }]}
                    >
                        <Input placeholder="Какая-то лицензия" />
                    </Form.Item>

                    {contestType === 'ml' ? (
                        <>
                            <Form.Item
                                name="metric"
                                label="Метрика"
                                rules={[{ required: true, message: 'Пожалуйста, укажите метрику!' }]}
                            >
                                <Input placeholder="accuracy" />
                            </Form.Item>
                            <Form.Item
                                name="target"
                                label="Целевая переменная"
                                rules={[{ required: true, message: 'Пожалуйста, укажите целевую переменную!' }]}
                            >
                                <Input placeholder="Survived" />
                            </Form.Item>
                            <Form.Item
                                name="dataset_private"
                                label="Приватный датасет (csv-файл)"
                                rules={[{ required: true, message: 'Пожалуйста, загрузите приватный датасет!' }]}
                            >
                                <Dragger {...uploadProps}>
                                    <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                                    <p className="ant-upload-hint">Перетащите файл или нажмите для загрузки</p>
                                </Dragger>
                            </Form.Item>
                        </>
                    ) : (
                        <>
                            <Form.Item
                                name="rl_github_repo"
                                label="GitHub репозиторий с RL средой"
                                rules={[{ required: true, message: 'Пожалуйста, укажите репозиторий!' }]}
                            >
                                <Input placeholder="https://github.com/DenkingOfficial/cartpole-evaluation" />
                            </Form.Item>
                            <Form.Item
                                name="dataset_private"
                                label="Файл со средой (zip-архив)"
                                rules={[{ required: true, message: 'Пожалуйста, загрузите файл со средой!' }]}
                            >
                                <Dragger {...uploadProps}>
                                    <p className="ant-upload-drag-icon"><FileZipOutlined /></p>
                                    <p className="ant-upload-hint">Перетащите файл или нажмите для загрузки</p>
                                </Dragger>
                            </Form.Item>
                        </>
                    )}

                    <Form.Item
                        name="dataset_public"
                        label="Публичный датасет (zip-архив)"
                        rules={[{ required: true, message: 'Пожалуйста, загрузите публичный датасет!' }]}
                    >
                        <Dragger {...uploadProps}>
                            <p className="ant-upload-drag-icon"><FileZipOutlined /></p>
                            <p className="ant-upload-hint">Перетащите файл или нажмите для загрузки</p>
                        </Dragger>
                    </Form.Item>

                    <Form.Item
                        name="rewards"
                        label="Награды"
                        rules={[{ required: true, message: 'Пожалуйста, укажите награды!' }]}
                    >
                        <Input placeholder="Знания, Уважение, Скилл" />
                    </Form.Item>

                    <Form.Item>
                        <Tooltip title={!isLogin ? "Войдите в аккаунт для создания" : null}>
                            <Button disabled={!isLogin} type="primary" htmlType="submit" className="w-full md:w-1/2 block mx-auto">
                                Создать соревнование
                            </Button>
                        </Tooltip>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};