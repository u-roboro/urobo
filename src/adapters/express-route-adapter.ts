import { Controller } from '../protocols';

import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    };
    try {
      const httpResponse = await controller.handle(request);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (ex) {
      res.status(ex.status).json({
        message: ex.message,
        type: ex.options.type,
      });
    }
  };
};
